Olá, gostaria de explicar um pouco o grave erro na funcionalidade de Marcação e a forma correta de usar para que o erro não aconteça.

Durante a realização eu fiz de uma forma claramente não tão inteligente, e isso causou um problema nas marcações. O que acontece é que ao marcar um supermercado no mapa ele cria uma nova layer no mapa e ao clicar novamente no botão ele apaga esta layer, porém, quando se muda o filtro, o html e recriado e os botões passam a criar novas layers no mapa ao invés de interagir com as layers criadas anteriormente. Desta forma, ao se marcar um supermercado e trocar o filtro sem desmarcar, se perde o acesso à layer criada e o marcador ficará no mapa até recarregar a página.

Por isso peço para que na hora de testar a funcionalidade de marcação sempre marque um supermercado e desmarque ele antes de mudar os filtros, pois assim as layers criadas no mapa são apagadas corretamente.

Peço desculpas pelo erro, mas não soube resolver com o código caótico que fiz. Qualquer outra coisa a respeito da minha funcionalidade é só me procurar que eu posso responder.

Obrigado,
Gustavo Garcia Macedo.