controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . e . . e . . e . . . . 
        . . . . . . e . e . e . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . e e e e e e e e e . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . e . e . e . . . . . 
        . . . . . e . . e . . e . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
    music.wawawawaa.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy()
    otherSprite.destroy(effects.fountain, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fountain, 500)
    scene.cameraShake(4, 500)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
game.splash("BENVINGUTS A L'ESPAI", "Apreta A per començar i B per disparar")
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 f 5 5 5 f 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 f 5 5 5 f 5 5 . . . . 
    . . . 5 5 f f f f f 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(77, 32)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . 5 . 5 . 5 . . . . 
        . . . . . 6 . 6 . 6 . 6 . . . . 
        . . . . . 6 . 6 . 6 . 6 . . . . 
        . . . . . 6 . 6 . 6 . 6 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
    mySprite.x += randint(0, scene.screenWidth())
    mySprite.setKind(SpriteKind.Enemy)
})
