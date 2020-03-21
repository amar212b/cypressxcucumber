### [Back](Step_Definition.md)

### How to write step

Buat file di `integration/ralali/search/search.js`
Di line pertama kita import terlebih dahulu module `cypress-cucumber-preprocessor/steps`

```js
import { Then, When } from 'cypress-cucumber-preprocessor/steps'
```

Kemudian Define element yang diperlukan pada step, dengan cara buka browser dan akses halaman yang ingin dibuat automation testing. 
Lakukan step-step secara manual testing, dan inspect element yang diberikan action.

<img src="img/inspect_element.gif" width="800"/>

Contoh kita akan membuat automation testing untuk fitur search, maka akses halaman yang ada fitur tersebut. Buka inspect element pada komponen atau field pencarian.
Kemudian cari attribute html yang se-unique mungkin, dikasus ini kita ambil attribute html `name` pada tag html input yang membangun sebuah kolom pencarian tersebut.

Lalu kita define di line code.
```js
const searchField = 'input[name="search"]'
```

Selanjutnya kita membuat fungsi step yang sesuai dengan feature `I search product using keyword "power bank"`.
```js
When(`I search product using keyword {string}`, keyword => {
  cy.get(searchField)
    .type(keyword)
})
```

Kenapa didalam step kita menulis `{string}`? ini berfungsi sebagai area input yang dinamis yang kita isi didalam feature "power bank". 
File step akan menerjemahkan format `I search product using keyword` beserta `{string}` yang nanti akan disimpan didalam variable `keyword`.
Kemudian variabel `keyword` akan di inputkan pada element `searchField`.

Secara sederhana step proses mengisi keyword pencarian seperti itu, tetapi kita perlu memahami behaviour dari aplikasi yang akan kita uji.
Dalam kasus ini, ternyata dalam proses si system membutuhkan proses load data yang cukup banyak, maka kita perlu mengkondisikannya.

Salah satunya kita bisa menambahkan time for waiting, disini kita bisa menggunakan fungsi yang cypress sediakan. 
seperti validasi network response, yang secara umum kita kenal `xhr`. jadi kita bisa menambahkan fungsi berikut.

```js
When(`I search product using keyword {string}`, keyword => {
  cy.server()
  cy.route('GET', '/home/quick-search').as('search')
  cy.get(searchField)
    .type(keyword)
    .type('{enter}')
  cy.wait('@search')
  cy.get('@search').then(xhr => {
    expect(xhr.method).to.eq('GET')
  })
})
```

Kenapa difungsi `.type(keyword)` ditambahkan `.type('{enter}')`? ini hanya menyederhakan step tanpa perlu click button pencarian. 
Berfungsi jika kita menemui kendala pada komponen button pencarian tidak ada attribute yg unique.

Selanjutnya, didalam feature kita mempunya step untuk memastikan hasil pencarian ditemukan `I see the search results with keyword "power bank"`. Maka kita perlu membuat step lagi sebagai berikut.

Tambahkan komponen yang digunakan untuk proses assertion.
```js
const searchField = 'input[name="search"]'
const thumbnail = 'div[class="thumbnail-container"';
```

Lalu stepnya.
```js
Then(`I see the search results with keyword {string}`, keyword => {
  cy.get(thumbnail).should(element => {
    expect(element.text()).to.contain(keyword)
  })
})
```

Penulisan file step selengkapnya berikut, dan disimpan didalam folder `integration/ralali/search/search.js` dengan sifat Private step.
```js
import { Then, When } from 'cypress-cucumber-preprocessor/steps'

const searchField = 'input[name="search"]'
const thumbnail = 'div[class="thumbnail-container"';

When(`I search product using keyword {string}`, keyword => {
  cy.server()
  cy.route('GET', '/home/quick-search').as('search')
  cy.get(searchField)
    .type(keyword)
    .type('{enter}')
  cy.wait('@search')
  cy.get('@search').then(xhr => {
    expect(xhr.method).to.eq('GET')
  })
})

Then(`I see the search results with keyword {string}`, keyword => {
  cy.get(thumbnail).should(element => {
    expect(element.text()).to.contain(keyword)
  })
})
```

## [How to run](../)
