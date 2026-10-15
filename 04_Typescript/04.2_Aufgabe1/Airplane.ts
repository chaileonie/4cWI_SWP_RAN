
interface Airplane {
    model: string;
    passengerCapacity: number;
    rangeInKM: number;
    isJet: boolean;
}

let airplanes: Airplane[] = [
    {
        model: "Boeing 747",
        passengerCapacity: 416,
        rangeInKM: 13450,
        isJet: true
    },
    {
        model: "ATR 72-600",
        passengerCapacity: 78,
        rangeInKM: 1500,
        isJet: false
    }
];

function printAirplaneInfo(plane: Airplane): void {
    const engineType: string = plane.isJet
        ? "Jet engine"
        : "Turboprop/propeller";


    console.log(`Model: ${plane.model}`);
    console.log(`Passenger capacity: ${plane.passengerCapacity}`);
    console.log(`Range: ${plane.rangeInKM} km`);
    console.log(`Engine type: ${engineType}`);
}
airplanes.forEach(printAirplaneInfo);


