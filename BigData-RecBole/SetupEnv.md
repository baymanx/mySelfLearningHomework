```
sudo apt update && sudo apt install -y git python3-dev python3-pip python3-venv wget
git clone https://github.com/RUCAIBox/RecBole.git
cd RecBole
python3.10 -m venv recbole_env
source recbole_env/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
pip install .
pip install --upgrade pip
pip install -r requirements.txt
pip install .

pip uninstall -y numpy
pip install numpy==1.23.5
pip uninstall -y torchvision
pip install torch==2.5.1 --index-url https://download.pytorch.org/whl/cpu

python run_recbole.py --model=BPR --dataset=ml-100k
