var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg","https://images.justwatch.com/poster/16690948/s592/arrival","https://www.europanet.com.br/superposter/images/vejapordentro/45724/45724.jpg","https://static.wikia.nocookie.net/velozes-e-furiosos/images/a/aa/Velozes_e_Furiosos_-_Capa.jpg/revision/latest?cb=20180305235641&path-prefix=pt-br","https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ead5f0dd7137897631146c2669b672d1d339c5681954b60fbdb7073ee4d02e14._RI_TTW_.jpg","https://media.fstatic.com/8fnMauXaLv8xuCk78WRJkeaMHpU=/322x478/smart/filters:format(webp)/media/movies/covers/2017/12/poster_opt_3_HMJwX5m.jpg"
]

for (var i=0; i < listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">");
}
