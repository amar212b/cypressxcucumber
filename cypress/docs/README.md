### [Back](../)

# How to write

Cara menulis automation testing code pada cypress dan cucumber, pertama kita hanya focus pada directory `integration`.
Didalam directory integeration kita mempunyai 2 tipe file:

1. File feature cucumber (format .feature)
2. File step definitions (format .js)

## Feature
Feature merupakan bahasa bisnis yang kita gunakan untuk menulis tes dengan cara yang mudah dibaca oleh manusia.
Penulisan test sesuai dengan testcase yang kita buat untuk manual testing. Berisi scenario, dan step-step nya yang mudah dipahami.

Contoh kita membuat scenario test untuk pencarian product dengan nama `search.feature` dan disimpan didalam folder `integration/ralali/search.feature`

```gherkin
@ralaliSearchTest
Feature: Ralali Website - Search

  @positiveTesting
  Scenario: As a User, I should be able to successfully search a product
    Given I go to ralali website page
    When I search product using keyword "power bank"
    Then I see the search results with keyword "power bank"
```

## Step Definition
File step menerjemahkan dari format feature ke script code, yang nanti meminta cypress menjalankan fungsi sesuai perintah yang sudah kita define. File disimpan dengan ekstensi .js.

## [Step Definition Details](Step_Definition.md)
