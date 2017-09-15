# Installation Instructions

## Weblocker Deployment

These are instructions for deploying TiP.ww to NCSU's weblocker environment.

### Connect to Weblocker

```
ssh <username>@remote.eos.ncsu.edu
cd /afs/eos.ncsu.edu/lockers/people/<initial>/<username>
```

### Create TiP Directories

```
git init --bare private/theoryinpractice.git
mkdir www/theoryinpractice
```

### Create Post-Receive Hook

The post-receive hook is activated after receiving a push. It makes use of `checkout -f`, which
will checkout the latest version of the `master` branch.

```
vi private/theoryinpractice.git/hooks/post-receive

#### BEGIN POST-RECEIVE CONTENTS
#!/bin/bash

GIT_WORK_TREE=/afs/eos.ncsu.edu/lockers/people/<initial>/<username>/www/theoryinpractice
GIT_DIR=/afs/eos.ncsu.edu/lockers/people/<initial>/<username>/private/theoryinpractice.git

git --work-tree=$GIT_WORK_TREE --git-dir=$GIT_DIR checkout -f
#### END POST-RECEIVE CONTENTS

chmod +x private/theoryinpractice.git/hooks/post-receive
```

### Add Local Git Remote

```
git remote add weblocker <username>@remote.eos.ncsu.edu:/afs/eos.ncsu.edu/lockers/people/<initial>/<username>/private/theoryinpractice.git
git push weblocker master
```

## Development Deployment

These instructions are for deploying TiP.www to a development server. They are written for TiP's shrubbery,
but any Fedora installation will do. Sudo access is required.

### Connect to Shrubbery
```
ssh shrubbery.csc.ncs.edu
```

### Install Nginx

```
sudo dnf install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Create Directories and Git Hooks

```
sudo mkdir /tipwww
sudo git init --bare /tipwww/tipwww.git
sudo mkdir /tipwww/tipwww.html

sudo chmod -R 777 /tipwww

vi /tipwww/tipwww.git/hooks/post-receive

### BEGIN POST-RECEIVE CONTENTS

#!/bin/bash

GIT_WORK_TREE=/tipwww/tipwww.html
GIT_DIR=/tipwww/tipwww.git

git --work-tree=$GIT_WORK_TREE --git-dir=$GIT_DIR checkout -f development

### END POST-RECEIVE CONTENTS

chmod +x tipwww.git/hooks/post-receive
```

### Configure Nginx

```
sudo vi /etc/nginx/nginx.conf

### BEGIN CONTENT ADDED TO SERVER{} BLOCK

location / {
    root /tipwww/tipwww.html;
}

### END CONTENT

sudo chown -R nginx:nginx /tipwww
```

### Open Port :80 and Configure SELinux

```
sudo systemctl stop firewalld
sudo iptables -I INPUT 5 -i eth0 -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
sudo iptables-save > /etc/sysconfig/iptables
sudo chcon -Rt httpd_sys_content_t /tipwww
```

### Restart Nginx

```
sudo systemctl restart nginx
```