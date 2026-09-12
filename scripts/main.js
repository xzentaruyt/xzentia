Events.on(ClientLoadEvent, () => {
    const.sparrusTeam = Team.get(8); 
    sparrusTeam.name = "sparrus-faction";
    sparrusTeam.color = Color.valueOf("0079bf"); 
    sparrusTeam.hasCore = true;
});
