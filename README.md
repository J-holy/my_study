# my_study

공부에 쓰는 웹 앱 모음입니다. 위쪽 탭(홈 · 단어 시험지 · 오답노트 · 깨끗한 시험지)으로 앱을 오가고, 탭을 바꿔도 하던 작업은 그대로 남아 있습니다.

| 폴더 | 앱 | 원본 |
|---|---|---|
| `word-test/` | 영어 단어 시험지 만들기 | `J-holy/academy-voca` 의 `app/dist/word-test-maker.html` |
| `odap-note/` | 오답노트 만들기 | `J-holy/o-dap-note` 에서 가져와 이 저장소에서 고칩니다 |
| `clean-sheet/` | 깨끗한 시험지 만들기 | 이 저장소에서 만들었습니다 (사진 보정·필기 지우기 코드는 오답노트에서 복사) |

- `index.html`: 상단 탭과 홈 화면. 각 앱은 탭 안에 열립니다 (`#word-test`, `#odap-note`, `#clean-sheet`).
- `about/`, `guide/`, `privacy/`: 소개(문의), 사용법, 개인정보처리방침 글 페이지. 공통 스타일은 `site.css`.
- `shell.js`: 앱 주소(`/word-test/`, `/odap-note/`)로 바로 들어오면 탭이 있는 첫 화면으로 옮겨 줍니다. 두 앱의 `<head>` 첫 줄에서 불러옵니다.

모든 앱은 빌드 없이 HTML 파일로 동작합니다.

## 라즈베리파이 글자 읽기 서버 함께 쓰기
단어 시험지에서 설정한 서버(주소·비밀번호·기기 번호, 브라우저의 `wtm_srv`·`wtm_dev`)를 오답노트도 그대로 씁니다.
오답노트의 **문제 고르기 → 문제 번호로 나누기 (서버)** 를 누르면 서버가 "1." "2." 같은 문제 번호를 읽어 문제 칸을 나눕니다.
서버를 끄거나 바꾸려면 단어 시험지 탭의 서버 설정에서 하면 됩니다. 사용량 제한도 두 앱이 함께 씁니다.

## 깨끗한 시험지 (기출문제 보관)
시험지 사진의 색깔 필기·채점 자국·연필 자국을 지우고(검은 펜은 지우개로) 문제만 남긴 뒤 인쇄하거나 PDF로 저장합니다.
**완성하기**를 누르면 원본 사진과 깨끗한 사진이 같은 라즈베리파이 서버(`POST /exam`, 비밀번호 필요 없음)에 학교·학년·과목·시험 정보와 함께 저장됩니다.
저장된 사진은 탭 맨 아래 **관리자**에서 서버 주인 비밀번호로만 볼 수 있습니다. 이 사이트는 공개 페이지라서 비밀번호 확인은 서버가 하고, 코드에는 비밀번호가 없습니다.
서버 쪽 설명(저장 폴더, 한도)은 `academy-voca` 의 `docs/RUNBOOK.md` "기출문제 보관함" 에 있습니다.

## 앱 업데이트
- **단어 시험지**: 소스와 OCR 서버는 `academy-voca` 에서 관리합니다. `python3 app/build.py` 로 만든 뒤
  `python3 tools/update_word_test.py ../academy-voca/app/dist/word-test-maker.html` 을 실행하면 `word-test/index.html` 로 복사하고 `shell.js` 를 붙여 줍니다.
- **오답노트**, **깨끗한 시험지**: `odap-note/index.html`, `clean-sheet/index.html` 을 직접 고칩니다. 첫 줄의 `<script src="../shell.js"></script>` 는 지우지 마세요.

## 배포 (GitHub Pages)
Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `/ (root)`

주소: `https://j-holy.github.io/my_study/`
- 단어 시험지: `https://j-holy.github.io/my_study/#word-test`
- 오답노트: `https://j-holy.github.io/my_study/#odap-note`
- 깨끗한 시험지: `https://j-holy.github.io/my_study/#clean-sheet`

## 도메인과 광고
도메인 연결과 애드센스 신청 순서는 [`docs/DOMAIN_AND_ADS.md`](docs/DOMAIN_AND_ADS.md) 에 있습니다.
