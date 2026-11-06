# Tax Academics Study Lab

개인 전용 세무사 1차 시험 학습 대시보드입니다. 정적 HTML/CSS/JavaScript + Firebase Authentication / Firestore / Storage로 구성되어 있으며 빌드 도구 없이 GitHub Pages에 배포할 수 있습니다.

## 제공 기능
- 이메일/비밀번호 로그인 (관리자가 Firebase 콘솔에서 계정 생성)
- 재정학, 세법학개론, 회계학개론(재무), 회계학개론(원가관리), 행정소송법
- 주제별 노트: 핵심 개념, 상세 설명, 시험 포인트, 영상 제작 메모
- 마인드맵: 노드 생성, 하위 노드 연결, 드래그, 설명, 삭제, 자동 배치
- 주제별 이미지 첨부(10MB 이하), 자동 저장, 검색, JSON 백업 및 복원
- 2차 시험 메뉴는 준비 중 표시

## 설치 순서
1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트를 만듭니다.
2. Authentication > Sign-in method에서 **이메일/비밀번호**를 활성화합니다. Authentication > Users에서 **본인 계정 하나만** 만듭니다. **공개 회원가입 기능은 제공하지 않습니다.**
3. Authentication > Users에서 본인 계정의 **UID**를 복사합니다.
4. Firestore Database와 Storage를 생성합니다. 가능하면 데이터 위치를 한국/가까운 지역으로 선택합니다. 사용량에 따라 Firebase 요금이 발생할 수 있습니다.
5. Firebase 프로젝트 설정 > 내 앱 > 웹 앱을 등록하고 `firebase-config.js`의 구성값을 실제 값으로 교체합니다. `OWNER_UID`도 본인 UID로 교체합니다.
6. `firestore.rules`와 `storage.rules`에 있는 `REPLACE_WITH_YOUR_UID`를 같은 UID로 바꾸고 각각 Firebase 콘솔의 **Firestore Database > Rules**, **Storage > Rules**에 게시합니다. 규칙의 UID를 반드시 교체해야 합니다.
7. Firebase Authentication > Settings > Authorized domains에 배포 도메인 `taxacademicus-cloud.github.io`를 추가합니다. 프로젝트에 따라 localhost도 테스트용으로 추가합니다.
8. 프로젝트 파일을 GitHub 저장소에 올린 후 Settings > Pages > Deploy from a branch에서 `main` / `(root)`를 선택합니다. 기존 대시보드와 분리하려면 별도 저장소(예: `tax-study-dashboard`)를 만듭니다.
9. `https://taxacademicus-cloud.github.io/tax-study-dashboard/` 같은 배포 URL로 접속해 로그인과 저장을 시험합니다. 이 URL은 저장소 이름을 위 예시대로 지정했을 때만 성립합니다.

## 로컬 테스트
프로젝트 폴더에서 `python -m http.server 8000` 실행 후 `http://localhost:8000`에 접속합니다. `file://` 직접 열기는 ES module 로딩 문제로 권장하지 않습니다.

## 주의사항
- `firebase-config.js`의 웹 구성값은 비밀키가 아닙니다. 실제 접근 통제는 Firebase 보안 규칙에서 이루어집니다.
- Firestore에는 현재 학습 데이터 전체를 한 문서에 저장합니다. 대규모 사용 시 Firestore 문서 크기 제한(1MiB)에 도달할 수 있어 주제별 문서 구조로 전환해야 합니다.
- 이미지 삭제는 Storage 파일 삭제를 시도합니다. 주제 삭제 시 기존 이미지 파일은 자동 삭제되지 않으므로 Storage 콘솔에서 정리해야 합니다.
- JSON 백업은 이미지 **링크와 메타데이터**만 포함합니다. 원본 이미지 자체는 포함하지 않습니다. 원본 이미지는 별도로 백업하세요.
- 하나의 기기/탭에서 편집하는 개인 사용을 가정합니다. 여러 탭에서 동시에 편집하면 마지막 저장이 우선할 수 있습니다.
- 이 프로젝트는 학습 기록 관리용이며 AI 대본 생성, 영상 자동 생성, 공동 편집 기능은 아직 포함하지 않습니다.
