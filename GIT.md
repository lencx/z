# git

* ssh: connect to host github.com port 22: Connection timed out

```bash
# https://stackoverflow.com/questions/15589682/ssh-connect-to-host-github-com-port-22-connection-timed-out
git clone git@github.com:username/repo.git

Cloning into 'repo'...
ssh: connect to host github.com port 22: Operation timed out
fatal: Could not read from remote repository.

sudo vim ~/.ssh/config

# .ssh/config
Host github.com
 Hostname ssh.github.com
 Port 443

ssh -T git@github.com

The authenticity of host '[ssh.github.com]:443 ([xxx.xxx.xxx.xxx]:443)' can't be established.
RSA key fingerprint is SHA256:xxxxxxxx.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[ssh.github.com]:443,[xxx.xxx.xxx.xxx]:443' (RSA) to the list of known hosts.
Hi lencx! You've successfully authenticated, but GitHub does not provide shell access.
```
