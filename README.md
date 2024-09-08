# ✅ Todolist

할 일 목록을 관리하는 To Do 서비스입니다.
(코드잇 스프린트 프론트엔드 단기심화 4기 사전과제 todolist 입니다.)


## 1. 프로젝트 개요

1. 개발 환경

  - Front : HTML, React, Next.js, Typescript, TailwindCSS, Zustand
  - 버전 및 이슈관리 : Github, Github Issues
  - 배포 환경 : Vercel

2. 작업 관리
   
  - GitHub Issues를 이용해 개발 단계를 나누어 진행했습니다.
      
![image](https://github.com/user-attachments/assets/207682f4-83aa-45d2-bbb5-4bf349d7a848)


  - 새로운 기능을 개발할 때 마다 이슈를 작성하고, 이슈 번호에 맞게 브랜치를 생성해 main과 분리하여 개발 후 pr을 통해 merge했습니다.
    
![image](https://github.com/user-attachments/assets/3994e1c6-2e74-4f5d-8ebb-55033de0c59a)
![image](https://github.com/user-attachments/assets/fcaecbbb-25a7-4e11-8e1b-d9bf0d36ff2c)




## 2. 프로젝트 실행 방법
  - 개발 환경
      - Node.js v21.7.1
      - Npm 10.8.2
  
### 배포 주소 사용시
- https://codeit-todolist-assignment.vercel.app/ 
### local 환경 사용시
- 프로젝트를 clone이나 fork 후 필요한 패키지를 설치합니다. `npm run dev`로 실행뒤 웹에서 localhost:3000으로 접속해 확인합니다.
  
     ```bash
     $ git cone https://github.com/MinaRoh/codeit-todolist-assignment.git
     $ npm install
     $ npm run dev
     ```
     

## 3. 화면 구성

|모바일|![image](https://github.com/user-attachments/assets/3fb7a3b5-385e-4a44-be33-b16bab2a7fad)|
|------|---|
|태블릿|![image](https://github.com/user-attachments/assets/11ec4299-95d8-403e-86d0-96aa16873ab2)|
|데스크탑|![image](https://github.com/user-attachments/assets/fa2248a9-3dd6-4b69-98ee-494c465750ae)|



### **할 일 목록 페이지(`/`)**

- **할 일 추가 기능**:
  ![Kapture 2024-09-06 at 13 56 33](https://github.com/user-attachments/assets/3010ef9f-66e5-44cc-81c9-9e5c4d0016d8)

- **목록 조회 및 할 일 완료 처리 기능**:
  ![Kapture 2024-09-08 at 18 06 01](https://github.com/user-attachments/assets/521bb5c6-cf09-4d08-a3fa-ccf4b87d00e5)


### **할 일 상세 페이지(`/items/{itemId}`)**

- **할 일 수정 기능**:
  ![Kapture 2024-09-08 at 16 56 44](https://github.com/user-attachments/assets/dfe87911-52f8-41bb-92d4-329f30ea4b8f)

- 이미지 파일 제한 (이미지 파일 이름은 영어로만 이루어지고, 크기는 5MB 이하)
  ![Kapture 2024-09-08 at 17 43 03](https://github.com/user-attachments/assets/1acd948a-82d6-4640-a803-b5b2589e2b1d)
          



## 평가 체크리스트
### **공통**

- [x]  **폰트 설정**: 제시된 폰트가 프로젝트에 적용되었나요?
- [x]  **컬러 시스템 설정**: 디자인 시안에 따른 컬러 시스템이 구현되었나요?
- [x]  **공용 컴포넌트 작성**: 공통적으로 사용되는 UI 요소가 재사용 가능한 컴포넌트로 작성되었나요?
- [x]  **반응형 웹 디자인**:
    - [x]  모바일 레이아웃에서 정상적으로 작동하나요?
    - [x]  태블릿 레이아웃에서 정상적으로 작동하나요?
    - [x]  데스크탑 레이아웃에서 정상적으로 작동하나요?

### **할 일 목록 페이지(`/`)**

- [x]  **목록 조회 기능**:
    - [x]  로고 버튼을 클릭했을 때 `/` 페이지로 이동(새로고침)이 되나요?
    - [x]  진행 중인 할 일과 완료된 할 일이 구분되어 표시되나요?
- [x]  **할 일 추가 기능**:
    - [x]  입력창에 할 일을 입력하고 `추가하기` 버튼을 클릭하거나 엔터를 눌렀을 때 새로운 할 일이 생성되나요?
- [x]  **할 일 완료 처리**:
    - [x]  진행 중인 할 일 항목의 체크박스를 클릭했을 때 완료 상태로 변경되나요?
    - [x]  완료된 할 일 항목의 체크박스를 클릭했을 때 다시 진행 중 상태로 변경되나요?

### **할 일 상세 페이지(`/items/{itemId}`)**

- [x]  **할 일 수정 기능**:
    - [x]  할 일 항목의 이름을 수정할 수 있나요?
    - [x]  메모를 추가할 수 있나요?
    - [x]  이미지를 첨부할 수 있나요? (이미지 파일 이름은 영어로만 이루어지고, 크기는 5MB 이하인가요?)
    - [x]  `수정 완료` 버튼을 클릭했을 때 수정 사항이 반영되고 할 일 목록 페이지로 이동되나요?
    - [x]  다시 할 일을 클릭했을 때 추가된 메모와 이미지가 잘 보이나요?
- [x]  **할 일 삭제 기능**:
    - [x]  `삭제하기` 버튼을 클릭했을 때 할 일이 삭제되고, 할 일 목록 페이지로 이동되나요?

### **추가 요구사항**

- [x]  **코드 주석 및 문서화**:
    - [x]  주요 기능과 컴포넌트에 대한 주석이 작성되었나요?
- [x]  **README.md 작성**:
    - [x]  프로젝트 설명이 명시되었나요?
    - [x]  사용 방법이 명시되었나요?
     
