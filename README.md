 ### almost every thing is working properly,incase kei modify garna man lagyo vaney,here is what's left for you pithey boy.

 - 1.search functionality only implements the searching based on the global state of news,can be modified to also implement searching via api as well.
 - 2.responsiveness yet to be done
 - 3.when you go to details page, and refresh the page, the state vanishes away resulting blank page(default phenoomenon), so localStorage ma save garna sakchau,incase - if refresh garda ni persist garauna man cha vaney.if garenau vaney detailed page ma refresh huda could encounter error(optional chaining haldeu chill maa)ani feri - sidebar bata back aunu parney huncha
 - 4.ahile dang dung ekaichoti loads of cards(around 98) ekaichoti render vacha, teslai pani load-more type shit banauna sakchau(yes to be halka cool-tara frontend only implementation huncha)
 - 5.useNews hook ma dependency array magi racha,getNews function lai useCallback ma halera dep array ma haldida huncha...newsData lai pani haal vani ra hola lint le baatho hudai matlab vayena, it works then it works.
