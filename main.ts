namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    game.over(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.follow()
myCorg.updateSprite()
myCorg.horizontalMovement()
myCorg.verticalMovement()
tiles.setTilemap(tiles.createTilemap(
            hex`1400080000000000000000000000000000000000000000000000000000000000000002020200000000000000000000000000000000000000000000000000000000000000000000020202000000020202000000030000000000000000000000000000000000000003000000020202020000000000000000000202020300000000000000000000000000000000000000030101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . . . 2 2 2 . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . 2 2 2 2 . . . . . . . . . 2 2 2 . 
. . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.builtin.coral0,sprites.castle.tilePath1,sprites.castle.tilePath4],
            TileScale.Sixteen
        ))
