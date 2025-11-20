# MouCraft-server

https://docker-minecraft-server.readthedocs.io/en/latest/


## Gamerule

```
/gamerule blockExplosionDropDecay false
/gamerule mobExplosionDropDecay false
/gamerule playersSleepingPercentage 40
/gamerule spawnRadius 5
/setworldspawn 0 63 0
/worldborder center 0 0
/worldborder set 500 0
```

## Scoreboard

```
/scoreboard objectives add DeathsCountObjective deathCount
/scoreboard objectives setdisplay list DeathsCountObjective

/scoreboard objectives add HP healh
/scoreboard objectives setdisplay below_name HP
```

## chunky

```
/chunky worldborder
/chunky start
/chunky radius 1000
/chunky start
/chunky world minecraft:the_nether
/chunky radius 1000
/chunky start
/chunky world minecraft:the_end
/chunky start
```

```
gamerule naturalRegeneration false
title @a title {"text":"Malédiction s'abat sur vous.","color":"red"}
```

Boost dragon 

```
/execute as @e[type=minecraft:ender_dragon] at @s run attribute @s minecraft:generic.max_health base set 1000
/execute as @e[type=minecraft:ender_dragon] run data modify entity @s Health set value 1000.0f
```
