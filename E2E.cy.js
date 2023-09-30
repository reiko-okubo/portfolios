describe('My First Test Suit', function()
{

    it('My First Test case',function(){
//(1)商品をカートに入れる
    cy.visit("https://www.rakuten.co.jp/")
    cy.get('#common-header-search-input').type('テスト商品3')
    //入力欄にテスト商品3とタイプしろ
    cy.wait(2000)
    cy.get('.button--15weO > .text-display--1Iony > .icon--2sY_j').click()
   // 検索ボタンを押下
   cy.get('h2 a').click()
   cy.wait(2000)

   cy.get(':nth-child(1) > .button--3SNaj > .text--26ZD7 > .spacer--xFAdr').click()
   cy.get(':nth-child(2) > .padding-right-xsmall--33t6H > .anchor--u064w > .trigger--1NPZw > .button--3SNaj').click()
   var res = 0
   var sum = 0
   cy.get('.subtotal-price').then(function(element){
           const amount = element.text()
           var res = amount.split('  ')//"10" "円"
           var total = res[2].trim() //変数resは、価格部分を示す
           //２商品の価格を合計する

        }).then(function () {
            cy.log(Number(res))//0
          })
         // cy.get('.subtotal-price').then(function (element) {
           // const amount = element.text()
           // cy.get('.subtotal-price').each(($el, index, $list) => {
                　　　　　　//各インデックスから商品価格の値を引き出すたびに、そのテキストを繰り返しログに表示する　//cy.log(el.text()
                      //    cy.log($el.text())
            //var res = amount.split(" ")
            //var total = res[0].trim()

     //   }).then(function () {
       //     cy.log(text)
         // })

        //}


     } )

    })
