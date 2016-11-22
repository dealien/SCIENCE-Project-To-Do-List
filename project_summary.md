# Project Summary

## Projects by user:
### project
{% for article in glossary.terms['project'].articles %}
* [{{ article.title }}]({{ article.path }})
{% endfor %}