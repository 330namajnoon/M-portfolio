export default function Team() {
    this.fonts = [
        {
            name: "f1",
            font: ""
        }
    ];
    this.colors = [
        {
            name: "t1",
            colors: {
                c1:"#FFFFFF",
                c2:"#20B573",
                c3:"#344C66",
                c4:"#20354A",
                c5:"#152942",
                c6:"#000000",
            }
        },
        {
            name: "t2",
            colors: {
                c1:"#000000",
                c2:"#152942",
                c3:"#20354A",
                c4:"#344C66",
                c5:"#20B573",
                c6:"#FFFFFF",
            }
        }
    ];
    this.selectedFont = this.fonts[0];
    this.selectedColors = this.colors[0];
    
}
Team.prototype.setColors = function(name = "t1") {
    this.selectedColors = this.colors.find(c => c.name === name);
}
Team.prototype.setFont = function(name = "f1") {
    this.selectedFont = this.fonts.find(f => f.name === name);
}
Team.prototype.getTeamColors = function(name = "t1") {
    return this.selectedColors;
}
Team.prototype.getTeamFont = function(name = "f1") {
    return this.selectedFont;
}
