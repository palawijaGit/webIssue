<?php
/**************************************************************************
* This file is part of the WebIssues Server program
* Copyright (C) 2006 Michał Męciński
* Copyright (C) 2007-2013 WebIssues Team
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
**************************************************************************/

require_once( '../../system/bootstrap.inc.php' );

class Client_Issues_Subscribe extends System_Web_Component
{
    protected function __construct()
    {
        parent::__construct();
    }

    protected function execute()
    {
        $issueManager = new System_Api_IssueManager();
        $issueId = (int)$this->request->getQueryString( 'issue' );
        $this->issue = $issueManager->getIssue( $issueId );

        $this->view->setDecoratorClass( 'Common_MessageBlock' );
        $this->view->setSlot( 'page_title', $this->tr( 'Subscribe To Issue' ) );

        $breadcrumbs = new Common_Breadcrumbs( $this );
        $breadcrumbs->initialize( Common_Breadcrumbs::Issue, $this->issue );

        $preferences = new System_Api_PreferencesManager();
        if ( $preferences->getPreference( 'email' ) == null )
            $this->noEmailAddress = true;

        $this->form = new System_Web_Form( 'issues', $this );

        if ( $this->form->loadForm() ) {
            if ( $this->form->isSubmittedWith( 'cancel' ) )
                $this->response->redirect( $breadcrumbs->getParentUrl() );

            if ( $this->form->isSubmittedWith( 'ok' ) ) {
                $subscriptionManager = new System_Api_SubscriptionManager();
                $subscriptionManager->addSubscription( $this->issue );
                $this->response->redirect( $breadcrumbs->getParentUrl() );
            }
        }
    }
}

System_Bootstrap::run( 'Common_Application', 'Client_Issues_Subscribe' );
