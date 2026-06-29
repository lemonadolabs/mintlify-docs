# Source: http://lemonado.io/prompts/daily-website-traffic-source-ranking

[Beta](http://lemonado.io/../)

[Features](http://lemonado.io/../features)

[Solutions](http://lemonado.io/../solutions)

[Resources](http://lemonado.io/../resources)

[Pricing](http://lemonado.io/../pricing)

[Login](https://data.lemonado.io/login)

[Try for free](https://data.lemonado.io)

[Beta](http://lemonado.io/../)

[Beta](http://lemonado.io/../)

[Back to prompts](http://lemonado.io/../prompts)

![](https://framerusercontent.com/images/JQ1XTbnC0WYijztpxSBLKVuhY.png?width=1600&height=900)

# Daily Website Traffic Source Ranking

[Try this in Lemonado](https://data.lemonado.io)

Data Sources

[![](https://framerusercontent.com/images/1ENPNo0jP14gJIVFkkjUFapULrw.jpg?width=96&height=96)\\ \\ Google Analytics](http://lemonado.io/../integrations/google-analytics)

Tools

[![](https://framerusercontent.com/images/ietvNWZyh0Jex0mFcYlEXwXWZdM.png?width=225&height=225)\\ \\ ChatGPT]()

[![](https://framerusercontent.com/images/jIQ9aYsNwbinLNzcfutfqVaDSdk.webp?width=512&height=512)\\ \\ Claude]()

[![](https://framerusercontent.com/images/oxMoGqu45HYwRRNlWWj0YWM1RE.png?width=512&height=512)\\ \\ Gemini]()

Department

[Marketing]()

Creator

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[Try this in Lemonado](https://data.lemonado.io)

See your top traffic sources from yesterday in Google Analytics with a simple ranked list. Quickly identify which channels are driving the most visitors to your site.

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use Lemonado MCP to retrieve GA4 traffic sources from yesterday and rank by user volume.

**Role:** You are a website analyst performing a daily traffic source check.

**Goal:** Show a simple ranked list of where yesterday's traffic came from.

#### Step 1: Time Period

**Default:** Yesterday (previous calendar day)

**If user wants to adjust:** "Would you like to see a different day?"

#### Step 2: Data Collection

For each traffic source, retrieve:

- Source/Medium (e.g., "google / organic", "facebook / cpc", "direct / none")
 
- Total users
 
- Total sessions
 
- Percentage of total traffic
 

#### Step 3: Output Format

**Header:**

TOP TRAFFIC SOURCES - YESTERDAY

Date: \[Yesterday's Date\]

Total Users: \[X,XXX\]

**Main Table (Top 10 Sources):**

RankSource / MediumUsers% of TotalSessions1google / organic3,45042.3%4,1202direct / none1,89023.2%2,2403facebook / cpc1,12013.7%1,3504google / cpc89010.9%1,0805linkedin / referral3404.2%4206bing / organic2302.8%2807instagram / cpc1451.8%1808twitter / social670.8%859email / email230.3%2810reddit / referral120.1%15

RankSource / MediumUsers% of TotalSessions1google / organic3,45042.3%4,1202direct / none1,89023.2%2,2403facebook / cpc1,12013.7%1,3504google / cpc89010.9%1,0805linkedin / referral3404.2%4206bing / organic2302.8%2807instagram / cpc1451.8%1808twitter / social670.8%859email / email230.3%2810reddit / referral120.1%15

#### Step 4: Error Handling

**Handle data limitations gracefully:**

- **No GA4 connection:** "Google Analytics not connected. Connect GA4 in Lemonado to access traffic source data."
 
- **No data for yesterday:** "No traffic data available for yesterday. Site may have been down or GA4 not tracking."
 
- **Data still processing:** "Yesterday's data may still be processing in GA4. Try again in 24-48 hours."
 

#### Workflow Summary

1. **Set Time Period** → Yesterday
 
2. **Retrieve Data** → Get users and sessions by source/medium
 
3. **Calculate Percentages** → Compute % of total traffic
 
4. **Rank Sources** → Sort by users (highest first)
 
5. **Format Output** → Present top 10 in simple table
 
6. **Handle Errors** → Address missing connection or data
 

**Output Goal:** 15-second scan to see where yesterday's traffic came from.

[Show all]()

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use Lemonado MCP to retrieve GA4 traffic sources from yesterday and rank by user volume.

**Role:** You are a website analyst performing a daily traffic source check.

**Goal:** Show a simple ranked list of where yesterday's traffic came from.

#### Step 1: Time Period

**Default:** Yesterday (previous calendar day)

**If user wants to adjust:** "Would you like to see a different day?"

#### Step 2: Data Collection

For each traffic source, retrieve:

- Source/Medium (e.g., "google / organic", "facebook / cpc", "direct / none")
 
- Total users
 
- Total sessions
 
- Percentage of total traffic
 

#### Step 3: Output Format

**Header:**

TOP TRAFFIC SOURCES - YESTERDAY

Date: \[Yesterday's Date\]

Total Users: \[X,XXX\]

**Main Table (Top 10 Sources):**

RankSource / MediumUsers% of TotalSessions1google / organic3,45042.3%4,1202direct / none1,89023.2%2,2403facebook / cpc1,12013.7%1,3504google / cpc89010.9%1,0805linkedin / referral3404.2%4206bing / organic2302.8%2807instagram / cpc1451.8%1808twitter / social670.8%859email / email230.3%2810reddit / referral120.1%15

#### Step 4: Error Handling

**Handle data limitations gracefully:**

- **No GA4 connection:** "Google Analytics not connected. Connect GA4 in Lemonado to access traffic source data."
 
- **No data for yesterday:** "No traffic data available for yesterday. Site may have been down or GA4 not tracking."
 
- **Data still processing:** "Yesterday's data may still be processing in GA4. Try again in 24-48 hours."
 

#### Workflow Summary

1. **Set Time Period** → Yesterday
 
2. **Retrieve Data** → Get users and sessions by source/medium
 
3. **Calculate Percentages** → Compute % of total traffic
 
4. **Rank Sources** → Sort by users (highest first)
 
5. **Format Output** → Present top 10 in simple table
 
6. **Handle Errors** → Address missing connection or data
 

**Output Goal:** 15-second scan to see where yesterday's traffic came from.

[Show all]()

## You might also like

[![](https://framerusercontent.com/images/6n6gpOl5GC49XcIKwDae25zwXy8.png?width=1600&height=900)](http://lemonado.io/./google-ads-essentials-prompt-starter-pack)

[Marketing]()

[**Google Ads Essentials: Prompt Starter 10-Pack**](http://lemonado.io/./google-ads-essentials-prompt-starter-pack)

[![](https://framerusercontent.com/images/U9uJcTuoJwVeYuGGGCA4oaqeRk.png?width=200&height=200)\\ \\ Lemonado]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

[![](https://framerusercontent.com/images/twjPnff3IEN9qsujD2G4eYLo.png?width=1600&height=900)](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[Marketing]()

[**Brand vs Non-Brand Ad Budget Optimization**](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[![](https://framerusercontent.com/images/zrTqj4z7o69geXY8XONJus0fuJs.jpeg?width=225&height=225)\\ \\ Albert Lundberg]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

[![](https://framerusercontent.com/images/afPhoGViYCXd4asCAKULXlOTw.png?width=1600&height=900)](http://lemonado.io/./google-ads-conversion-health-monitoring)

[Marketing]()

[**Google Ads Conversion Health Monitoring**](http://lemonado.io/./google-ads-conversion-health-monitoring)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

## Tutorials using same data sources

[![](https://framerusercontent.com/images/nBmrMSjNeEgESkLYj91mINtRgU.png?width=1600&height=900)](http://lemonado.io/./daily-website-traffic-source-ranking)

[AI]()

[**Lemonado Start Guide**](http://lemonado.io/./daily-website-traffic-source-ranking)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/j4IyobjX9HUlU099KuaHKFGz4.png?width=1600&height=900)](http://lemonado.io/./daily-website-traffic-source-ranking)

[Marketing]()

[**Claude Skills for Paid Media with Lemonado MCP**](http://lemonado.io/./daily-website-traffic-source-ranking)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/u5UPsOhDLNPAN6Q5GyzVynzlQyk.png?width=1600&height=900)](http://lemonado.io/./daily-website-traffic-source-ranking)

[AI]()

[**Connect your Lemonado workspace to ChatGPT**](http://lemonado.io/./daily-website-traffic-source-ranking)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

## Stop fighting with data. Start feeding your AI.

Connect your data to AI and free your team from reporting and busywork.

Sign up for newsletter

Sign up for newsletter

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)