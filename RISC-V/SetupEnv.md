sudo apt update
sudo apt install -y autoconf automake libmpc-dev libmpfr-dev libgmp-dev \
    gawk build-essential bison flex texinfo curl git device-tree-compiler \
    libglib2.0-dev pkg-config libpixman-1-dev libyaml-dev
sudo apt install -y python3 python3-pip
git clone --depth=1 https://github.com/riscv-collab/riscv-gnu-toolchain.git
cd riscv-gnu-toolchain
 
./configure --prefix=/opt/riscv --with-arch=rv64gc --with-abi=lp64d #--with-arch=rv32imac
make -j$(nproc)
cd ..
git clone --depth=1 https://github.com/riscv/riscv-isa-sim.git
cd riscv-isa-sim
sudo mkdir -p /opt/riscv
sudo chown $USER:$USER /opt/riscv
mkdir build && cd build
../configure --prefix=/opt/riscv
make -j$(nproc)
make install
cd ~/riscv-gnu-toolchain 
git clone --depth=1 https://github.com/qemu/qemu.git
cd qemu
sudo apt install python3-tomli

sudo apt update \
&& sudo apt --fix-broken install -y \
&& sudo apt install -y \
  git build-essential pkg-config python3.10-venv \
  libglib2.0-dev libfdt-dev libpixman-1-dev zlib1g-dev \
  ninja-build libslirp-dev

./configure --target-list=riscv64-softmmu,riscv32-softmmu --prefix=/opt/riscv
make -j$(nproc)
make install

cd ~/riscv-gnu-toolchain
./configure --prefix=/opt/riscv --with-arch=rv64gc --with-abi=lp64d
make -j$(nproc)

sudo apt install -y gcc-riscv64-unknown-elf binutils-riscv64-unknown-elf

export RISCV=/opt/riscv
export PATH=$RISCV/bin:$PATH
source ~/.bashrc

riscv64-unknown-elf-gcc --version
spike --help
qemu-system-riscv64 --version



make clean all

qemu-system-riscv64 \
  -machine virt \
  -nographic \
  -bios none \
  -kernel hello.elf

