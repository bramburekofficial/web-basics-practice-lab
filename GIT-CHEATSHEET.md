# Git шпаргалка

## Склонировать репозиторий

```bash
git clone <repo-url>
cd web-basics-practice-lab
```

Команда `git clone` скачивает проект с GitHub на компьютер.

## Проверить состояние

```bash
git status
```

Используйте эту команду часто. Она показывает:

- какая ветка сейчас открыта;
- какие файлы изменены;
- какие файлы уже добавлены в commit;
- есть ли что отправлять на GitHub.

## Создать новую ветку

```bash
git checkout -b practice/day-1-your-name
```

Ветка нужна, чтобы не менять `main` напрямую.

## Добавить файлы в commit

```bash
git add .
```

Эта команда добавляет все изменения в будущий commit.

Если нужно добавить один файл:

```bash
git add public/index.html
```

## Сделать commit

```bash
git commit -m "Complete day 1 practice"
```

Commit должен описывать один понятный шаг.

Плохой message:

```text
fix
```

Лучше:

```text
Fix broken image path on practice page
```

## Отправить ветку на GitHub

```bash
git push origin practice/day-1-your-name
```

После push можно открыть pull request на GitHub.

## Получить свежие изменения

```bash
git pull
```

Используйте `git pull`, чтобы получить обновления из удаленного репозитория.

## Как не отправить изменения в main

Перед работой всегда проверяйте ветку:

```bash
git status
```

Если вы видите:

```text
On branch main
```

создайте новую ветку:

```bash
git checkout -b practice/day-1-your-name
```

## Что делать, если вы на неправильной ветке

Если изменения еще не закоммичены:

```bash
git status
git checkout -b practice/day-1-your-name
```

Git перенесет ваши незакоммиченные изменения в новую ветку.

Если изменения уже закоммичены в неправильной ветке, не паникуйте. Сообщите наставнику и покажите:

```bash
git status
git log --oneline -5
```

## Полезный порядок работы

```bash
git status
git checkout -b practice/day-1-your-name
npm start
git status
git add .
git commit -m "Complete day 1 practice"
git push origin practice/day-1-your-name
```

