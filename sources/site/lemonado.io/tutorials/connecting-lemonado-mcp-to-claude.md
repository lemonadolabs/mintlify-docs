# Source: http://lemonado.io/tutorials/connecting-lemonado-mcp-to-claude

[Beta](http://lemonado.io/../)

[Back to Tutorials](http://lemonado.io/../tutorials)

# Connect your Lemonado workspace to Claude

Connect Lemonado to Claude via MCP and give your AI co-pilot secure, real-time access to your marketing and revenue data.

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

![](https://framerusercontent.com/images/0R6eYSrhOeIJsP32HL3RlLDlQ.png?width=1600&height=900)

Claude supports **Model Context Protocol (MCP)**, which allows you to securely connect external tools and data sources directly into your chat.

With Lemonado’s MCP server, you can give Claude secure, real-time, read-only access to your business data — including ad platforms like Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads, along with Stripe, Snowflake, spreadsheets, databases, and other data sources connected inside your Lemonado workspace.

Unlike many MCP servers that allow models to modify data, **Lemonado operates strictly as a read-only data layer**. Claude can analyze your data, but it cannot change or delete it. Your underlying systems remain protected at all times.

This guide walks you through:

- Opening connector settings in Claude
 
- Adding Lemonado as an MCP connector
 
- Activating it inside a chat or Project
 
- Querying your data safely
 

#### Before you begin, make sure you:

- Have an active Lemonado account. [Sign up here for a 10-day free trial](https://data.lemonado.io/signup)
 
- Have at least one data source connected inside Lemonado
 
- Need help setting up your account? [Go to our Lemonado Starter Guide](https://lemonado.io/tutorials/start-guide)
 

### Step 1: Open Connector Settings

1. Go to [claude.ai](https://claude.ai/) in your browser.
 
2. Click your **profile icon → Settings**
 
3. Navigate to the **Connectors** section in the sidebar
 
4. Click **Add custom connector**
 

**Note:** You can create multiple Lemonado connectors if you manage separate clients, teams, or use cases.

![](https://framerusercontent.com/images/OP7IGwcEpOOA6QElzm4DQ9W8Mk.png)

### Step 2: Add Your Lemonado Connector

1. In the **Add custom connector** window, enter the following:
 

- **Name:** Lemonado
 
- **MCP Server URL:** `https://mcp.lemonado.io/mcp`
 
- **Authentication:** OAuth (recommened)
 

2. Click **Add** to save
 
3. Click **Connect** to begin authentication
 

A new browser window will open, prompting you to log into Lemonado and authorize Claude. Once authentication completes, your Lemonado connector will show as **Connected** inside Claude.

**Note:** Claude may display a warning that custom connectors are built by external developers. Lemonado is fully read-only — it can query and analyze data, but cannot modify or delete it.

![](https://framerusercontent.com/images/kUojEEdmXkhJqmns3DkLjCPMMYw.png)

### Step 3: Use Lemonado Inside a Chat

1. Start a new chat in Claude
 
2. Click the **+** icon in the chat to open browse files, connectors, and more
 
3. Find **Lemonado** from the list of available connectors
 
4. Toggle it **on**.
 

Once activated, Claude can route relevant queries to Lemonado automatically.

![](https://framerusercontent.com/images/Ce4hmaPEfmVTsRyG2VxBHt7nbng.png)

### Using Lemonado Inside Claude Projects

If you use **Claude Projects** to organize work by client or team, Lemonado works seamlessly within those environments.

When Lemonado is enabled inside a Project, it remains available across chats in that Project, and Claude can combine:

- Project-level context (strategy docs, brand guidelines, notes)
 
- Ongoing conversation history
 
- Real-time marketing and revenue data from Lemonado
 

You can update or refine context directly inside the Claude Project at any time. You can also manage client-level context inside Lemonado under **Clients**. Any context defined in Lemonado is carried with the data through the connector, ensuring Claude understands the structure and meaning of each client’s data.

For agencies, this effectively creates a persistent AI analyst per client — combining structured data, historical context, and strategic documentation in one place.

![](https://framerusercontent.com/images/Cgo6XvhjOJnhcydCaCzKbRVcd8w.png)

### Step 4: Start Querying Your Data

Once Lemonado is active, you can ask natural language questions like:

- “Which campaigns across Google, Meta, and LinkedIn drove the highest ROAS this week?”
 
- “Compare cost per purchase by channel over the last 30 days.”
 
- “Which campaigns have spent over $5,000 with no conversions this month?”
 
- “Break down revenue by campaign and ad set for Client A.”
 

Claude will securely query Lemonado’s unified SQL engine, allowing you to combine and analyze data from multiple platforms in a single request.

All queries run in real time and remain read-only.

### Managing or Removing the Connector

To manage your Lemonado connector:

1. Go to **Settings → Connectors**
 
2. Select **Lemonado**
 
3. Disconnect or remove the connector
 

You can also revoke OAuth access directly from your Lemonado workspace.

### Best Practices

- **Scope access appropriately –** Only connect the data sources your team needs.
 
- **Monitor usage regularly –** Review Lemonado logs to track how queries are being executed.
 
- **Maintain security hygiene –** Rotate OAuth tokens periodically and remove unused connectors.
 

You’ve now connected Claude to Lemonado via MCP, enabling secure, real-time access to your business data.

If you need help, reach out to [hello@lemonado.io]()

###### Share this post

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

# More tutorials

[![](https://framerusercontent.com/images/nBmrMSjNeEgESkLYj91mINtRgU.png?width=1600&height=900)](http://lemonado.io/./start-guide)

[**Lemonado Start Guide**\\ \\ Everything you need to connect your data, set up your clients, and get your first automated report out the door.](http://lemonado.io/./start-guide)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/j4IyobjX9HUlU099KuaHKFGz4.png?width=1600&height=900)](http://lemonado.io/./claude-skills-for-paid-media-with-lemonado-mcp)

[**Claude Skills for Paid Media with Lemonado MCP**\\ \\ Claude Skills are powerful — but they're only as good as the data behind them. This guide walks you through connecting Lemonado MCP to Claude so every Skill runs on live campaign data, not whatever you last exported.](http://lemonado.io/./claude-skills-for-paid-media-with-lemonado-mcp)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/u5UPsOhDLNPAN6Q5GyzVynzlQyk.png?width=1600&height=900)](http://lemonado.io/./connecting-lemonado-mcp-to-chatgpt)

[**Connect your Lemonado workspace to ChatGPT**\\ \\ Connect Lemonado to ChatGPT via MCP and query your live marketing and revenue data directly inside your chat.](http://lemonado.io/./connecting-lemonado-mcp-to-chatgpt)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

## Stop fighting with data. Start feeding your AI.

Connect your data to AI and free your team from reporting and busywork.

Sign up for newsletter

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)