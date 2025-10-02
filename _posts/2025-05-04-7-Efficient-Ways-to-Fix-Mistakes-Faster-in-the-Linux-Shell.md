---
title: 7 Efficient Ways to Fix Mistakes Faster in the Linux Shell
tags: ['linux', 'shell', 'commands']
categories: ['linux', 'cli']
---

# Stop Rewriting Terminal Commands: 7 Efficient Ways to Fix Mistakes Faster in the Linux Shell

As a DevOps engineer or terminal power user, you probably live inside a terminal window more than any GUI. It’s fast, powerful, and flexible — but prone to human error. We all mistype, miss a flag, or forget sudo once in a while.

The good news? You don’t have to rewrite commands from scratch.

Here are 7 efficient and professional ways to correct previous commands in the Linux shell without wasting time or breaking your flow.

1. Use Ctrl + R for Reverse History Search

```bash
# just press
ctlr + r
```

```shell
╭─   ~
╰─❯
bck-i-search: _
```

Start typing a part of the command, and it shows up interactively. Press Enter to execute it, or use the arrow keys to modify it.
> Example: Want to re-run a Docker command? Just type docker after Ctrl + R.

2. Use fc to Edit the Last Command Before Running It

The `fc` command (short for "fix command") is a hidden gem.

```bash
fc
```

This opens your last command in your default terminal editor (vim, nano, etc.). You can correct it, save, and it will automatically run the fixed command. This is extremely useful for long and complex commands.

3. Use `!!, !keyword`, or `!-n` for Fast Reuse

- `!!` – Repeat the last command

- `sudo !!` – Repeat the last command with sudo

- `!git` – Repeat the most recent command that started with git

- `!-2` – Run the 2nd last command

These shortcuts are a huge time-saver once you build muscle memory.

4. Use `history | grep <keyword>` to Search Manually

If you're unsure where a past command is, this will help:

```bash
history | grep docker
```

```shell
❯ history | grep docker
  103  docker ps
  104  docker pull jenkins/jenkins
  106  docker network create jenkins_bridge
  107  docker volume create jenkins_home
  108  docker run --help
  117  https://get.docker.com/
  118  curl https://get.docker.com/
  210  docker ps
  239  docker run --help
  286  cd why-need-docker
  316  docker run hello-world
  329  docker ps
```

5. Create Aliases and Functions to Avoid Repetition

Personally, I wouldn't recommend to use this options if you change your terminal or work different environment frequently. Because Once you are being used to with these alias then you will face trouble when there is no alias in terminal. While I was learning terraform, I was using this alias option to make it shortly `tf`. And you know what happens, I still type `tf` in terminal It pops out from head automatically. But, still it may useful for some cases.

```bash
alias k='kubectl'
alias dcu='docker-compose up -d'

restart_docker() {
  docker-compose down && docker-compose up -d --build
}
```

Just put these things in your `.bashrc/.zshrc...` file.

6. You can use `echo` to preview before any dangerous command like `rm`:

```bash
echo rm -rf /you-dont-want-to-me-remove-right/*
```

It's a good habit to avoid system failure.

7. Using awesome tool like `zsh` plugins or `thefuck`.

Yes, if you already using `zsh` (z-shell), you can use zsh plugins like, fzf.

If you don't want to use anything above. then go for this: [`thefuck`](https://github.com/nvbn/thefuck) It's a all in one solution. It will help to correct your commands, suggest the commands based on your typo. 

```shell
❯ dokcer ps
zsh: command not found: dokcer
❯ fuck
docker ps [enter/↑/↓/ctrl+c]
```

That's all for today. Thanks!
