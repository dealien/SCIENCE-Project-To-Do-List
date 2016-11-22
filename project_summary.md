# Project Summary

##Projects by user:
###Vyren11
{% for article in glossary.terms['Vyren11'].articles %}
* [{{ article.title }}]({{ article.path }})
{% endfor %}