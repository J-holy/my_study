# my_study

공부에 쓰는 웹 앱 모음입니다. 위쪽 탭(🏠 홈 · 📝 단어 시험지 · 📕 오답노트)으로 앱을 오가고, 탭을 바꿔도 하던 작업은 그대로 남아 있습니다.

| 폴더 | 앱 | 원본 |
|---|---|---|
| `word-test/` | 영어 단어 시험지 만들기 | `J-holy/academy-voca` 의 `app/dist/word-test-maker.html` |
| `odap-note/` | 오답노트 만들기 | `J-holy/o-dap-note` 에서 가져와 이 저장소에서 고칩니다 |

- `index.html`: 상단 탭과 홈 화면. 각 앱은 탭 안에 열립니다 (`#word-test`, `#odap-note`).
- `shell.js`: 앱 주소(`/word-test/`, `/odap-note/`)로 바로 들어오면 탭이 있는 첫 화면으로 옮겨 줍니다. 두 앱의 `<head>` 첫 줄에서 불러옵니다.

모든 앱은 빌드 없이 HTML 파일로 동작합니다.

## 라즈베리파이 글자 읽기 서버 함께 쓰기
단어 시험지에서 설정한 서버(주소·비밀번호·기기 번호, 브라우저의 `wtm_srv`·`wtm_dev`)를 오답노트도 그대로 씁니다.
오답노트의 **문제 고르기 → 문제 번호로 나누기 (서버)** 를 누르면 서버가 "1." "2." 같은 문제 번호를 읽어 문제 칸을 나눕니다.
서버를 끄거나 바꾸려면 단어 시험지 탭의 서버 설정에서 하면 됩니다. 사용량 제한도 두 앱이 함께 씁니다.

## 앱 업데이트
- **단어 시험지**: 소스와 OCR 서버는 `academy-voca` 에서 관리합니다. `python3 app/build.py` 로 만든 뒤
  `python3 tools/update_word_test.py ../academy-voca/app/dist/word-test-maker.html` 을 실행하면 `word-test/index.html` 로 복사하고 `shell.js` 를 붙여 줍니다.
- **오답노트**: `odap-note/index.html` 을 직접 고칩니다. 첫 줄의 `<script src="../shell.js"></script>` 는 지우지 마세요.

## 배포 (GitHub Pages)
Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `/ (root)`

주소: `https://j-holy.github.io/my_study/`
- 단어 시험지: `https://j-holy.github.io/my_study/#word-test`
- 오답노트: `https://j-holy.github.io/my_study/#odap-note`
