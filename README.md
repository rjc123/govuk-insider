govuk-insider
=============

This is a simple bookmarklet designed to use the Report A Problem box to create a feedback loop on content quality for GOV.UK. 

It prefixes any submission with "GOVUK INSIDER" with the intent that this could be used to filter zendesk tickets on the backend.

It could also be further enhanced to provide types/effort/categorisation of errors, were someone with the appropriate skill set to get involved.

Bookmarklet code: ```javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://raw.github.com/rjc123/govuk-insider/master/scripts/govuk-insider.js';})();```
