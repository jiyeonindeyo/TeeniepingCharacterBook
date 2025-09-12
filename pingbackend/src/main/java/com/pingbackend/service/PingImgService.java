package com.pingbackend.service;

import com.pingbackend.entity.Ping;
import com.pingbackend.entity.PingImg;
import com.pingbackend.entity.repository.PingImgRepository;
import com.pingbackend.entity.repository.PingRepository;
import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
@RequiredArgsConstructor
public class PingImgService {

//    private String pingImgLocation = "C:/TeeniepingCharacterBook/pingbackend/images";
    private String pingImgLocation = "../../../../../../images";

    private final PingImgRepository pingImgRepository;
    private final PingRepository pingRepository;
    private final FileService fileService;


    /*
    클라이언트(브라우저)가 보낸 item 이미지 정보 첨부 파일
    ==> 요청 바디에서 데이터를 자바 객체로 바인딩 하는 책임 ==> 컨드롤러
    서비스 책임?
    트랜젝션으로 묶여있기때문에 순서가 중요(파일 시스템에 저장을 하고 DB에 저장해야됨)
    1. MultipartFile에 들어있는 이미지 파일 ==>파일시스템에 저장 ==> FileService 호출
    2. DB에 저장할 ItemImg 정보==> DB에 저장 ==? ItemRepository
     */
    public void savePingImg(Ping ping, PingImg pingImg, MultipartFile pingImgFile) throws Exception {

        String oriImgName = pingImgFile.getOriginalFilename();
        String imgName = "";
        String imgUrl = "";

        //1.파일 시스템에 파일 업로드...
        if(!StringUtils.isEmpty(oriImgName)){
            imgName = fileService.uploadFile(pingImgLocation, oriImgName, pingImgFile.getBytes());
            imgUrl = "/images/" + imgName;
        }
        pingImg.setPing(ping);
        pingImg.updatePingImg(oriImgName, imgName, imgUrl);
        //2.DB에 저정한 정보 저장
        pingImgRepository.save(pingImg);
    }


//    public void updatePingImg(Long pingId, MultipartFile pingImgFile) throws Exception {
//        if(!pingImgFile.isEmpty()){
//            PingImg savedPingImg = pingImgRepository.findByPingId(pingId);
//
//            if (savedPingImg == null){
//                PingImg pingImg = new PingImg();
//                pingImg.setPing(pingRepository.findById(pingId).orElseThrow(EntityNotFoundException::new));
//                savePingImg(pingImg, pingImgFile);
//            }
//
//            //1. 기존에 파일 시스템에 저장되어있던 이미지 삭제
//            if (!StringUtils.isEmpty(savedPingImg.getImgName())){
//                fileService.deleteFile(pingImgLocation + "/" + savedPingImg.getImgName());
//            }
//            //2. DB 기존에 레코드 내용 업데이트(새로 저장된 이미지의 경로, 이름, 원본 이미지 이름)
//            // JPA entity update의 더티체킹 ==> 조회된 엔티티의 필드 변경
//            String oriImgName = pingImgFile.getOriginalFilename();
//            //새파일 저장하고 저장된 파일명 받기
//            String imgName = fileService.uploadFile(pingImgLocation, oriImgName, pingImgFile.getBytes());
//            String imgUrl = "/images/" + imgName;
//            savedPingImg.updatePingImg(oriImgName, imgName, imgUrl);
//
//        }
//    }
    public void updatePingImg(Ping ping, MultipartFile pingImgFile) throws Exception {
        if(!pingImgFile.isEmpty()){
            PingImg savedPingImg = pingImgRepository.findByPingId(ping.getId()).orElse(new PingImg());

            //1. 기존에 파일 시스템에 저장되어있던 이미지 삭제
            if (!StringUtils.isEmpty(savedPingImg.getImgName())){
                fileService.deleteFile(pingImgLocation + "/" + savedPingImg.getImgName());
            }
            savePingImg(ping, savedPingImg, pingImgFile);

            //2. DB 기존에 레코드 내용 업데이트(새로 저장된 이미지의 경로, 이름, 원본 이미지 이름)
            // JPA entity update의 더티체킹 ==> 조회된 엔티티의 필드 변경
//            String oriImgName = pingImgFile.getOriginalFilename();
//            //새파일 저장하고 저장된 파일명 받기
//            String imgName = fileService.uploadFile(pingImgLocation, oriImgName, pingImgFile.getBytes());
//            String imgUrl = "/images/" + imgName;
//            savedPingImg.updatePingImg(oriImgName, imgName, imgUrl);

        }
    }
}
