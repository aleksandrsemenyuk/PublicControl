import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(EventAggregator, HttpClient)
export class IssueForm{
    coord = {};
    name = "...";
    description = "...";

    constructor (eventAggregator, http)
    {
        // Configurate http client
        http.configure(config => {
            config
              .useStandardConfiguration()
              .withBaseUrl('/api/Issue/');
        });

        this.http = http;
        this.eventAggregator = eventAggregator;
    
        this.eventAggregator.subscribe('inform', result => {
                // change current coord when marker move
                this.coord = result;
        });
    }
    
    /**
     * Save current issue.
     */
    save()
    {
        var self = this;
        var issue = {
            Name : self.name,
            Desc : self.description,
            X : self.coord.lat(),
            Y : self.coord.lng(),
        }

        this.http.fetch("Add", {
            method: "POST",
            body: JSON.stringify(issue),
            headers: {"content-type": "application/json; charset=utf-8"}
        });
    }
}