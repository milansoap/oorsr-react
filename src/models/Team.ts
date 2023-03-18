import { Player, Functionary } from "./Person";

class Team {
name: string;
establishmentYear: Number;
director: Functionary;
coach: Functionary;
players: Player[];


constructor(name: string, establishmentYear:number, director: Functionary, coach: Functionary) {
    this.name = name;
    this.establishmentYear = establishmentYear;
    this.director = director;
    this.coach = coach;
    this.players = [];
}

// addPlayer(player: Player) {
//     this.players.push(player)
// }

// updatePlayer(player: Player): void {
//     const index = this.players.findIndex(p => p.id === player.id);
//     if (index !== -1) {
//         this.players[index] = player;
//     }
// }

// removePlayer(player: Player): void {
//     const index = this.players.findIndex(p => p.id === player.id);
//     // findIndex returns -1 if no index is found (method)
//     if (index !== -1) {
//         // splice starting index is index and it is removing items 1 from index
//         this.players.splice(index, 1);
//     }
// }

// printData(): string {
//     let data: string;

//     data = 'Team name: ' + this.name + '\n'
//     data += 'Establishment year: ' + this.establishmentYear + '\n'
//     data += 'Director: ' + this.director.name + ' ' + this.director.surname + '\n'
//     data += 'Coach: ' + this.coach.name + ' ' + this.coach.surname + '\n'
//     this.players.forEach(player =>{
//         data += player.name + ' ' + player.surname
//     });

//     return data;
// }

 }

 export { Team };