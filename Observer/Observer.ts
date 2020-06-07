interface Observer {
    update(data: any): any;
}

interface Subject {

    observers: Observer[];

    subscribe (observer: Observer): void;

    unsubscribe (observer: Observer): void;

    notify (data: any): void;
}

class ImpSubject implements Subject {

    observers: Observer[] = [];

    subscribe(observer: Observer): void {
        const alreadyObserver = this.observers.includes(observer);

        if (!alreadyObserver) {
            this.observers.push(observer);
            console.log('Subject: Added new observer.');
        } else {
            console.log('Subject: Observer alread exists!');
        }
    }
    unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex == -1) {
            return console.log('Subject: Observer not exists.');
        }

        this.observers.splice(observerIndex, 1);
        return console.log('Subject: Observer removed.');
    }
    notify(data: any): void {
        console.log('Notifying all observers');
        this.observers.forEach(obs => obs.update(data));
    }

    updateState (state: number) {
        const afterProcess = state * 2;
        console.log(`Subject: I received the number: ${state} and after process it: ${afterProcess}`);
        this.notify({received: state, afterProcess});
    }

}

class Observer1 implements Observer {
    update(data: any) {
        console.log('Im observer1 and I received an update..', data);
        this.internalLogic(data.afterProcess);
    }
    private internalLogic(num: number) {
        console.log('After receives an update, this method is called.', num + 10);
    }
}

class Observer2 implements Observer {
    update(data: any) {
        console.log('Im observer2 and I received an update..', data);
    }
}

const subject = new ImpSubject();

const obs1 = new Observer1();
const obs2 = new Observer2();

subject.subscribe(obs1);
subject.subscribe(obs2);

subject.updateState(10);
