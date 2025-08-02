```
sudo apt update
sudo apt install -y qemu qemu-system-x86 qemu-utils ovmf

mkdir -p ~/qemu && cd ~/qemu
qemu-img create -f qcow2 ubuntu-disk.qcow2 20G
wget https://releases.ubuntu.com/22.04/ubuntu-22.04.5-live-server-amd64.iso


qemu-system-x86_64 \
  -m 2G \
  -cpu qemu64 \
  -smp 2 \
  -drive file=ubuntu-disk.qcow2,format=qcow2 \
  -cdrom ubuntu-22.04.5-live-server-amd64.iso \
  -boot d \
  -net nic -net user


qemu-system-x86_64 \
  -m 2G \
  -cpu qemu64 \
  -smp 2 \
  -drive file=ubuntu-disk.qcow2,format=qcow2 \
  -boot c \
  -net nic -net user
