install: # установить зависимости
	npm ci

link: #установить пакет локально
	npm link

publish: #фейковая публикация для просмотра отчета
	npm publish --dry-run

lint: #сделать проверку соблюдения правил линтера
	npx eslint .

build: #произвести сборку webpack
	npx webpack

brain-even:# запустить игру на четность
	node bin/brain-even.js

brain-calc:# запустить игру калькулятор
	node bin/brain-calc.js

brain-gcd:# запустить игру НОД
	node bin/brain-gcd.js

brain-progression:# запустить игру прогрессия
	node bin/brain-progression.js

brain-prime:# запустить игру простое число
	node bin/brain-prime.js
