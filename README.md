# SeeLook

## 🖌 Description
오늘날 패션에 대해 관심이 기울이는 사람들이 많아지고 있습니다. 외출을 할 때 어떤 옷을 입을지, 내가 어떤 옷을 가지고 있는지에 대한 고민과 기억을 하는데 많은 시간이 지체됩니다.
그리고, 본인의 스타일을 기록하는 룩북을 만들기에는 비용과 시간이 부담됩니다.

그래서, 저희는 이러한 문제점을 해결하고자 소지하고 있는 옷이나 입은 스타일 기록이 가능한 템플릿을 제공하여 보다 쉽고 빠르게 룩북을 제공하기 위해 **SeeLook**을 만들게 되었습니다.

## 🔧 How to Run
❗ 본 프로젝트를 사용하기에 앞서 Firebase API키가 필요합니다.

**Step 1.** 본 프로젝트를 git clone을 통하여 복제를 합니다.
```bash
git clone https://github.com/ray9583/SeeLook.git
cd ./SeeLook
```
**Step 2.** 최상위 폴더(루트 폴더)에서 파일 명이 .env인 파일을 만듭니다.

**Step 3.** .env 파일 안에 다음과 같이 작성합니다.

- ✨.env 파일 안에 해당되는 apikey, authDomain, projectID, storageBucket, messagingSenderId는 Firebase 프로젝트 생성 후 프로젝트 설정에 들어가서 일반 -> 내 앱 부분에서 다음 사진과 같이 확인할 수 있습니다.
<img src="https://github.com/ray9583/SeeLook/assets/121305133/39ae0916-8e8c-4d9e-b17b-f1c7519a3e85" width="500" height="500">

사진에서 가려진 부분의 key값을 옮겨 적으면 됩니다.

```js
REACT_APP_API_KEY = apikey
REACT_APP_AUTH_DOMAIN = authDomain
REACT_APP_PROJECT_ID = projectID
REACT_APP_STORAGE_BUCKET= storageBucket
REACT_APP_MESSAGING_SENDER_ID =  messagingSenderId
REACT_APP_APP_ID = appId
```

**Step 4.** npm ci를 통하여 모듈을 다운받고, npm run start를 통해 실행합니다.

```bash
npm ci
npm run start
```

[SeeLook 바로가기](seelook-6e45e.web.app)

## ⛓️ Service Architecture
<img src="public/assets/서비스 아키텍처2.svg" alt="서비스 아키텍처">


## 📱 APP Screenshot

### 이미지 1: 로그인 및 회원가입, 메인 페이지

![로그인 및 회원가입](image1.gif)
회원가입을 통해 아이디를 생성하고 로그인을 하면 메인 페이지로 접근 가능합니다.

---

### 이미지 2: Lookbook 페이지 기능

![Lookbook 페이지](image2.gif)
업로드 버튼을 통해 이미지를 카테고리별로 업로드할 수 있으며, 온도를 설정할 수 있습니다. "My Look"에서는 업로드한 이미지를 관리할 수 있고, 카테고리와 온도에 따라 추천 기능이 제공됩니다.

---

### 이미지 3: 옷장 아이템 관리 페이지

![옷장 아이템 관리](image3.gif)
업로드 기능을 통해 아이템을 카테고리별로 추가할 수 있습니다.

## 🚨 R&R
* 김진우[FE/팀장]: ImageCrop, Gallery, Modal, Design, Background, Idea
* 곽지훈[FE/팀원]: Login, Signup, Louter Guard, CSS Style, UI/UX  
* 채민기[FE/팀원]: (Style, Clothes)Upload, Category, Stylist, Clothes, LooBookModal, Firebase Storage

