# 禁用 suspend 和 hibernate 服务
sudo systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target

# 屏幕不熄灭
gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-ac-type 'nothing'
gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-battery-type 'nothing'
gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-ac-timeout 0
gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-battery-timeout 0

# 不锁屏
gsettings set org.gnome.desktop.session idle-delay 0
gsettings set org.gnome.desktop.screensaver lock-enabled false

# 停用 unattended-upgrades 服务
sudo systemctl stop unattended-upgrades
sudo systemctl disable unattended-upgrades

# 禁用APT自动更新定时器
sudo systemctl disable apt-daily.service apt-daily.timer
sudo systemctl disable apt-daily-upgrade.service apt-daily-upgrade.timer

# 删除配置
sudo rm -f /etc/apt/apt.conf.d/20auto-upgrades
sudo rm -f /etc/apt/apt.conf.d/10periodic


