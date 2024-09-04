describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio'); // переход на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввод почты
         cy.get('#pass').type('iLoveqastudio1'); // ввод пароля
         cy.get('#loginButton').click(); // нажать войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка крестик
     })
 
     it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio'); // переход на сайт
         cy.get('#forgotEmailButton').click(); // нажать кнопку забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // ввод почты
         cy.get('#restoreEmailButton').click(); // нажать кнопку восстановить пароль
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверить текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка крестик
     })
 
     it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio'); // переход на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввод почты
         cy.get('#pass').type('iLoveqastudio2'); // ввод пароля
         cy.get('#loginButton').click(); // нажать войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверить текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка крестик
     })
 
     it('Неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio'); // переход на сайт
         cy.get('#mail').type('german@dolnikowww.ru'); // ввод почты
         cy.get('#pass').type('iLoveqastudio1'); // ввод пароля
         cy.get('#loginButton').click(); // нажать войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверить текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка крестик
     })
 
     it('Валидация на наличие @', function () {
         cy.visit('https://login.qa.studio'); // переход на сайт
         cy.get('#mail').type('germandolnikov.ru'); // ввод почты
         cy.get('#pass').type('iLoveqastudio'); // ввод пароля
         cy.get('#loginButton').click(); // нажать войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверить текст
     })
 
     it('Приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio'); // переход на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввод почты
         cy.get('#pass').type('iLoveqastudio1'); // ввод пароля
         cy.get('#loginButton').click(); // нажать войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверить текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка крестик
     })
 })