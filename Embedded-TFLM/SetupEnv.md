```
sudo apt update && sudo apt install -y python3 python3-pip python3-venv git
sudo apt install -y python3.10-venv
sudo apt install git
python3 -m venv tinyml-env
source tinyml-env/bin/activate
pip install --upgrade pip
git clone https://github.com/tensorflow/tflite-micro.git
cd tflite-micro
git submodule update --init
pip install numpy pandas jupyter matplotlib
sudo apt install -y cmake build-essential clang-format


cd tensorflow/lite/micro/examples/hello_world
make -f tensorflow/lite/micro/tools/make/Makefile hello_world_bin

cd ~/tflite-micro
sudo apt update && sudo apt install -y curl

make -f tensorflow/lite/micro/tools/make/Makefile hello_world_bin
./gen/linux_x86_64_default_gcc/bin/hello_world


wget https://developer.arm.com/-/media/Files/downloads/gnu-rm/10.3-2021.10/gcc-arm-none-eabi-10.3-2021.10-x86_64-linux.tar.bz2
tar -xjf gcc-arm-none-eabi-10.3-2021.10-x86_64-linux.tar.bz2
sudo mv gcc-arm-none-eabi-10.3-2021.10 /opt/
echo 'export PATH=$PATH:/opt/gcc-arm-none-eabi-10.3-2021.10/bin' >> ~/.bashrc
source ~/.bashrc

cd ~
git clone https://github.com/ARM-software/CMSIS_5.git


