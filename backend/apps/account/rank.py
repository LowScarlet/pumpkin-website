rank_raw = {
    "wooden": {
        "id": "wooden",
        "value": 0,
        "cost": 0,
        
        "attribute": {
            "icon": "wooden.png",
            "banner": "wooden_bg.png",
            "displayname": "Wooden",
        },
        
        "benefits_feature": [],

        "benefits_stats": {},
    },
    "stone": {
        "id": "stone",
        "value": 1,
        "cost": 50,
        
        "attribute": {
            "icon": "stone.png",
            "banner": "stone_bg.png",
            "displayname": "Stone",
        },
        
        "benefits_feature": [
            "create_guild",
        ],
        
        "benefits_stats": {
            "exp_multipler": 0.5,
        },
    },
    "iron": {
        "id": "iron",
        "value": 2,
        "cost": 75,

        "attribute": {
            "icon": "iron.png",
            "banner": "iron_bg.png",
            "displayname": "Iron",
        },
        
        "benefits_feature": [
            "change_username",
        ],
        
        "benefits_stats": {
            "exp_multipler": 1.0,
            "coin-tf-fee-reduc": 0.1
        },
    },
    "gold": {
        "id": "gold",
        "value": 3,
        "cost": 75,

        "attribute": {
            "icon": "gold.png",
            "banner": "gold_bg.png",
            "displayname": "Gold",
        },
        
        "benefits_feature": [
            "custom_profile_banner",
        ],
        
        "benefits_stats": {
            "exp_multipler": 1.0,
            "coin-tf-fee-reduc": 0.1
        },
    },
}

def rank_benefits(rank):
    value = rank_raw[rank]["value"]
    benefits_feature = []
    benefits_stats = {}
    for x in rank_raw:
        if rank_raw[x]["value"] <= value:
            for y in rank_raw[x]["benefits_feature"]:
                benefits_feature.append(y)

            for z in rank_raw[x]["benefits_stats"]:
                if benefits_stats.get(z):
                    benefits_stats[z] += rank_raw[x]["benefits_stats"][z]
                else:
                    benefits_stats[z] = rank_raw[x]["benefits_stats"][z]
    return {
        "benefits_feature": benefits_feature,
        "benefits_stats": benefits_stats
    }

for x in rank_raw:
    rank_raw[x]['all_benefits'] = rank_benefits(x)

RANK = rank_raw

BENEFIT = {
    "create_guild": {
        "id": "create_guild",
        "aliases": "Create Guild",
        "description": "Create your own Guild",
    },
    "change_username": {
        "id": "change_username",
        "aliases": "Change Your Username",
        "description": "Changed your username (Only pumpkin project account username!)",
    },
    "exp_multipler": {
        "id": "exp_multipler",
        "aliases": "Exp Multipler",
        "description": "Exp Multiplier for easier leveling up! (Applies to all system levels!)",
    },
    "coin-tf-fee-reduc": {
        "id": "coin-tf-fee-reduc",
        "aliases": "Fee Reduction",
        "description": "Cost Reduction on coin transfer",
    },
    "custom_profile_banner": {
        "id": "custom_profile_banner",
        "aliases": "Custom Banner",
        "description": "Custom Banner for your profile page (Can use .gif format Terms and conditions apply!)",
    },
}