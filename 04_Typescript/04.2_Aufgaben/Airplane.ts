
interface Airplane {
    model: string;
    passengerCapacity: number;
    rangeInKm: number;
    isJet: boolean;
}

const fleet: Airplane[] = [
    {
        model: "Airbus A350-900",
        passengerCapacity: 325,
        rangeInKm: 15000,
        isJet: true
    },
    {
        model: "ATR 72-600",
        passengerCapacity: 78,
        rangeInKm: 1300,
        isJet: false
    }
];

function printAirplaneInfo(plane: Airplane): void {
    const engineType: string = plane.isJet
        ? "Jet engine"
        : "Turboprop/propeller";

    console.log("--- Airplane ---");
    console.log(`Model: ${plane.model}`);
    console.log(`Passenger capacity: ${plane.passengerCapacity}`);
    console.log(`Range: ${plane.rangeInKm} km`);
    console.log(`Engine type: ${engineType}`);
    console.log("----------------");
}

fleet.forEach(printAirplaneInfo);


