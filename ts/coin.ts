class Quarter {

    private value = .25;

    get Value() {
        return this.value;
    }

    set Value(newValue: number) {
        this.value = newValue;
    }

    getImageUrl () {
        this.value = .25;
        return "img/Quarter.png"
    }

}

var coin = new Quarter();

var value = coin.Value;
