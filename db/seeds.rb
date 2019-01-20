# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ArkClass.destroy_all();
ArkClass.create({name: 'TEST Berserker', classtype: 'Warrior'});
Passive.destroy_all();
Passive.create({name: 'Charge', description: 'Charge forward 3m and attack in a cone'});
Skill.destroy_all()
Skill.create({name: 'Sharp Spear', acquired_level: 10, cooldown: 5, skill_type: "Normal", 
                mana_cost: 41, description: 'Strongly stab forward with the spear to inflic [x] damage', 
                effect: 'Stagger [Low], Back Attack', t_1_1: 1, t_1_2: 1, t_1_3: 1,
                t_2_1: 1, t_2_2: 1, t_2_3: 1,
                t_3_1: 1, t_3_2: 1, t_3_3: 1, arkclass_id: 1})