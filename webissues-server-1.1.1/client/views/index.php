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

class Client_Views_Index extends System_Web_Component
{
    protected function __construct()
    {
        parent::__construct();
    }

    protected function execute()
    {
        $this->view->setDecoratorClass( 'Common_SinglePane' );
        $this->view->setSlot( 'page_title', $this->tr( 'Manage Views' ) );

        $helper = new Common_Views_Helper();
        $breadcrumbs = $helper->getBreadcrumbs( $this );

        $this->form = new System_Web_Form( 'views', $this );
        if ( $this->form->loadForm() )
            $this->response->redirect( $breadcrumbs->getParentUrl() );

        $this->type = $helper->getType();

        $helper->initializeViewParsing();

        $this->grid = $helper->prepareGrid( $this );
        $this->toolBar = $helper->prepareToolBar( $this );
    }
}

System_Bootstrap::run( 'Common_Application', 'Client_Views_Index' );
