from flask import Flask, render_template, request
import requests
from collections import defaultdict
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/commit_history', methods=['POST'])
def commit_history():
    username = request.form['username']
    access_token = request.form['access_token']

    url = f"https://api.github.com/users/{username}/events"
    headers = {
        "Authorization": f"token {access_token}"
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        commit_events = [event for event in response.json() if event['type'] == 'PushEvent']
        
        thirty_days_ago = datetime.now() - timedelta(days=30)
        commit_count = defaultdict(int)
        for event in commit_events:
            event_date = datetime.strptime(event['created_at'], '%Y-%m-%dT%H:%M:%SZ')
            if event_date >= thirty_days_ago:
                commit_count[event_date.strftime('%Y-%m-%d')] += 1
        
        dates = list(commit_count.keys())
        commit_values = list(commit_count.values())
        commit_values = [min(value, 100) for value in commit_values]

        plt.figure(figsize=(12, 6))
        plt.bar(dates, commit_values, color='skyblue')
        plt.xlabel('Date')
        plt.ylabel('Commit Count')
        plt.title('Average Commits per Day in Last 30 Days')
        plt.xticks(rotation=45)
        plt.yticks(range(0, 101, 5))
        plt.tight_layout()
        plt.savefig('static/commit_history.png')  # Save the plot as an image
        plt.close()

        return render_template('commit_history.html')
    else:
        return "Error: Unable to fetch commit history."

if __name__ == '__main__':
    app.run(debug=True)
