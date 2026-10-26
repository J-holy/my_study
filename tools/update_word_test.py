"""academy-voca 에서 만든 단어 시험지 앱을 이 저장소로 가져와요.

사용법: python3 tools/update_word_test.py ../academy-voca/app/dist/word-test-maker.html

가져온 뒤 상단 탭과 홈 버튼이 동작하도록 <head> 바로 뒤에 ../shell.js 를 붙여요.
"""
import pathlib
import sys

TAG = '<script src="../shell.js"></script>'

if len(sys.argv) != 2:
    sys.exit("academy-voca 의 app/dist/word-test-maker.html 경로를 넣어 주세요")
html = pathlib.Path(sys.argv[1]).read_text(encoding="utf-8")
if TAG not in html:
    if "<head>" not in html:
        sys.exit("<head> 를 찾지 못했어요")
    html = html.replace("<head>", "<head>\n" + TAG, 1)
dst = pathlib.Path(__file__).resolve().parent.parent / "word-test" / "index.html"
dst.write_text(html, encoding="utf-8")
print("word-test/index.html 을 바꿨어요.")
