export interface CarInterface {
    brand: string;
    model: string;
    characteristics: string[];
}

export const car: CarInterface = {
    brand: "Audi",
    model: "A6",
    characteristics: ["2000cc", "All wheel drive"]
}


//LogEntry
// Greška: poruka
//Datum i vreme kada se desila greška
// LogLevel: Info, Warning, Error

// "Pristupate nepostojećem podatku", "2026-01-01 00:00:05", "Info"

// log level = Info, Warning, Error
type LogLevel = "Info" | "Warning" | "Error" 

type Logentry = [string, Date, LogLevel]

const serverLogs: Logentry[] = [
    ["Desila se greška 404", new Date("2026-01-01 00:02:05"), "Error"]
]

