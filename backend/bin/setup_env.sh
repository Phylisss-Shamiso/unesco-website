python -m venv env
activate(){
    . env/Scripts/activate
    echo 'installing requirements'
    pip install -r requirements.txt
}
activate