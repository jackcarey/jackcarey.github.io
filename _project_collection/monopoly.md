---
title: Monopoly
img: /assets/logos/go.ico
links: 
date: 1 October 2019
endDate: 20 December 2019
tags: "c-sharp"
categories: "university windows"
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/mKoKRkFTusw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Description
[Monopoly](https://wikipedia.org/wiki/Monopoly_(game)) is a classic property trading board game that comes in many versions and varieties. My application puts the game on screen as a Windows Form application. It was written in C# for a first-year university assignment. The game uses the [standard rules](https://www.hasbro.com/common/instruct/00009.pdf), except property auctioning.

##### Features

* 7 themes to select from, with tokens for each: Standard, The Beatles, James Bond, Disney, New Zealand, Alan Turing, and World Edition.
* Player highlighting - easily find players on the board by hovering over their token
* Animation - watch as tokens travel around the board (toggleable)
* Randomized chance, community, and go-to-jail cards.
* Easy to use, recognizable interface

##### Screenshots

*click to enlarge*

<div class="flex-row">
{%include /snippets/image.html src="/assets/images/monopoly/monopoly_screenshot.png" alt="Monopoly Start State" caption="Start State" height="150" lightbox=true%}
{%include /snippets/image.html src="/assets/images/monopoly/monopoly_gameplay.png" alt="Monopoly Gameplay" caption="Gameplay" height="150" lightbox=true%}
{%include /snippets/image.html src="/assets/images/monopoly/monopoly_controls.png" alt="Monopoly User Controls" caption="Controls" height="150" lightbox=true %}
{%include /snippets/image.html src="/assets/images/monopoly/monopoly_property_tooltip.png" alt="Monopoly Property Tooltip" caption="Property Tooltip" height="150" lightbox=true%}
{%include /snippets/image.html src="/assets/images/monopoly/monopoly_bankrupt.png" alt="Monopoly Bankrupt Dialog" caption="Bankruptcy Dialog" height="150" lightbox=true%}
{%include /snippets/image.html src="/assets/images/monopoly/monopoly_bankrupt_sell.png" alt="Monopoly Bankrupt Selling Properties" caption="Property Selling Dialog" height="150" lightbox=true%}
</div>

### Code Highlights

I created many classes for this application, but have highlighted two of them below. For this assignment, the access modifiers for attributes and methods was not important. As I knew the app was only for demonstration, I set all access to '*public*' in order to speed up development. For a release version of the software, I'd have used '*private*' and '*protected*' modifiers with setters and getters to properly encapsulate the data.

##### Player Class

The Player class is used primarily to store data, but the *setToken()* method allowed me to conveniently update on-screen images when a player changes their token, leaves the game, or enters/exits Jail. Storing token values in *Properties.Settings* meant that I could also load a players last token during initialisation of a new game.

```csharp
public class Player
        {
            public string Tag; //p1,p2,p3, or p4
            public int TokenIndex; //use 0 for not playing
            ...
            public PictureBox PicBox;
            public PictureBox PreviewBox;
            public PictureBox ParentBox;
            public int inJail;//default = 0. otherwise 1-3 to count turns.

            public void setToken(int index)
            {
                this.TokenIndex = index; //use token 0 for not playing
                switch (this.Tag)
                {
                    case "p1":
                        Properties.Settings.Default.P1Token = index;
                        break;
                    case "p2":
                        Properties.Settings.Default.P2Token = index;
                        break;
                    case "p3":
                        Properties.Settings.Default.P3Token = index;
                        break;
                    case "p4":
                        Properties.Settings.Default.P4Token = index;
                        break;
                    default: break;
                }
                Properties.Settings.Default.Save();
                if (PicBox != null && PreviewBox!=null)
                {
                    if (index == 0)
                    {
                        PicBox.Visible = false;
                        PreviewBox.Visible = false;
                    }
                    else
                    {
                        PicBox.Visible = true;
                        PreviewBox.Visible = true;
                        //foreground image to be used for 'in-jail bars'.
                        PicBox.BackgroundImage = themeImage("token_" + index.ToString()); 
                        PicBox.Image = themeImage(inJail > 0 ? "jail_bars" : "transparent");
                        PreviewBox.BackgroundImage = themeImage("token_" + index.ToString());
                        PreviewBox.Image = themeImage(inJail > 0 ? "jail_bars" : "transparent");
                    }
                }
            }

        }
```
### PropertySet Class
A complete set of properties allows players to add houses or charge more rent. The PropertySet class contains an *isComplete()* method for checking if houses can be added to a set and the *playerActive()* method to return how many properties count towards rent, which is used for station and utility spaces.
```csharp
public class PropertySet
        {
            public Color Color;
            public string Type;
            //The Property class contains information about the name, price, owner, mortgage status, rent and position of a square on the board.
            public Property[] Properties;

            // number of Properties in this set owned by specified player and 'active' (not mortgaged)
            public int playerActive(Player pl=null)
            {
                Property[] setProperties = Properties;
                int count = 0;
                string tag = pl==null?"":pl.Tag;
                for (int i = 0; i < setProperties.Length; ++i)
                {
                    Property curr = setProperties[i];
                    //if the current property in this set is unmortgaged and owned by the player passed as a parameter
                    if (curr.Owner!=null && curr.Owner.Tag == tag && curr.isMortgaged == false)
                    {
                        //add one to their active count
                        ++count;
                    }
                }
                return count;
            }

            public bool isComplete()
            {
                //every set is assumed to be completed until proven otherwise
                bool isComplete = true;
                Property[] setProperties = Properties;
                //for every property in this set
                for (int i = 0; i < setProperties.Length; ++i)
                {
                    //the first property in each set is ignored since there is nothing to compare it to.
                    //this ensures an error does not occur for single property sets like Free Parking, Jail and Go.
                    if (i > 0)
                    {
                        Property curr = setProperties[i];
                        Property prev = setProperties[i - 1];
                        //if this property is mortagaged or has a different owner to the previous one
                        if (curr.isMortgaged || curr.Owner == null || prev.Owner == null || curr.Owner.Tag != prev.Owner.Tag)
                        {
                            //the set is not complete
                            isComplete = false;
                            //break out of for loop, since we don't need to check any more properties.
                            break;
                        }
                    }
                }
                return isComplete;
            }
        }
```

