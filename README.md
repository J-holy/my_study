# my_study

공부에 쓰는 웹 앱 모음입니다. 첫 화면(`index.html`)에서 각 앱으로 들어갑니다.

| 폴더 | 앱 | 원본 |
|---|---|---|
| `word-test/` | 영어 단어 시험지 만들기 | `J-holy/academy-voca` 의 `app/dist/word-test-maker.html` |
| `odap-note/` | 오답노트 만들기 | `J-holy/o-dap-note` 의 `index.html` |

모든 앱은 빌드 없이 HTML 파일 한 장으로 동작합니다.

## 앱 업데이트
- **단어 시험지**: 소스와 OCR 서버는 `academy-voca` 에서 관리합니다. `python3 app/build.py` 로 만든 `app/dist/word-test-maker.html` 을 이 저장소의 `word-test/index.html` 로 덮어씁니다.
- **오답노트**: `odap-note/index.html` 을 직접 고칩니다.

## 배포 (GitHub Pages)
Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `/ (root)`

주소: `https://j-holy.github.io/my_study/`
- 단어 시험지: `https://j-holy.github.io/my_study/word-test/`
- 오답노트: `https://j-holy.github.io/my_study/odap-note/`
