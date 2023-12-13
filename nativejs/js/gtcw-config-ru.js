/*!***************************************************
* google-translate.js v1.0.6
* https://Get-Web.Site/
* author: Vitalii P.
*****************************************************/

/* Вы можете перенести данный конфиг в head своего сайта, чтобы динамически конфигурировать значения при помощи данных из CMS */
/* You can transfer this config to the head of your site to dynamically configure values using data from the CMS */

const googleTranslateConfig = {
	/* Original language */
	lang: "ru",

	/* Если хотите подписаться на событие "FinishTranslate" (Момент когда скрипт закончил перевод), расскоментируйте и добавьте любое проверочное слово на оригинальном языке */
	/* If you want to subscribe to the "FinishTranslate" event (The moment when the script finished translating), uncomment and add any test word in the original language */
	// testWord: "Язык",

	/* The language we translate into on the first visit*/
	/* Язык, на который переводим при первом посещении */
	// langFirstVisit: 'en',

	/* Если скрипт не работает или работает неправильно, раскомментируйте и укажите основной домен в свойстве domain */
	/* If the script does not work or does not work correctly, uncomment and specify the main domain in the domain property */
	// domain: "Get-Web.Site"

};
