# From https://www.devdungeon.com/content/convert-markdown-html-python

import markdown
from markdown.extensions.toc import TocExtension

f = open("markdown.md") 
md_text = f.read()

html = markdown.markdown(md_text, extensions=[TocExtension(toc_depth="2-5", title='Table of Contents:')])
print("Markdown converted to html.")

with open("index.html", 'w') as f:
    f.write(html)
    f.close