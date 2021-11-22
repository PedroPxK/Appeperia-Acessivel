var campoEmail=document.querySelector('#email')
var susgestao=document.querySelector('#susgestao');

var domains = ['gmail.com', 'aol.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org"];

campoEmail.addEventListener('blur', function() {
    Mailcheck.run({
        email: campoEmail.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        suggested: function(suggestion) {
          susgestao.style.display='inline-block';
          susgestao.textContent ='Você quis dizer: ' + suggestion.full + '?';
          susgestao.parentNode.classList.add=('contatoCampo--erro');
          campoEmail.classList.add('contatoCampo--validouErro');
          susgestao.setAttribute('tabindex', '0');
          susgestao.setAttribute('role', 'alert');
        }
      });
});