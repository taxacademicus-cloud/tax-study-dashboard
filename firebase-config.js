// Firebase 콘솔 > 프로젝트 설정 > 내 앱 > 웹 앱의 구성값으로 교체하세요.
export const firebaseConfig = {
  apiKey: 'REPLACE_ME',
  authDomain: 'REPLACE_ME.firebaseapp.com',
  projectId: 'REPLACE_ME',
  storageBucket: 'REPLACE_ME.firebasestorage.app',
  messagingSenderId: 'REPLACE_ME',
  appId: 'REPLACE_ME'
};
// Firebase Authentication > 사용자 > UID를 입력하세요. 빈 문자열이면 로그인은 가능하지만
// Firestore/Storage 보안 규칙에서 UID를 제한해야만 개인 전용으로 안전합니다.
export const OWNER_UID = 'REPLACE_WITH_YOUR_UID';
